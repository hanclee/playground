from flask import Flask, render_template, jsonify, request
from Bio import Entrez, SeqIO

app = Flask(__name__)
proteins = ["NC_000852", "NC_007346", "NC_008724", "NC_009899", "NC_014637", "NC_016072", "NC_020104", "NC_023423", "NC_023640", "NC_023719", "NC_027867"]
protein_sequences = []

@app.before_first_request
def load_fasta_data():
    for protein in proteins:
        for seq_record in SeqIO.parse("data/"+protein+".fasta", "fasta"):
            print("Loading",seq_record.id,repr(seq_record.seq),"size",len(seq_record));
            protein_sequences.append(seq_record.seq)

@app.route('/')
def hello_bio():
    Entrez.email = "hanclee@yahoo.com"
    handle = Entrez.esearch(db="nucleotide", term="Cypripedioideae", retmax=1000, idtype="acc")
    record = Entrez.read(handle)
    handle.close()
    return render_template('hello_world.html', ids=record["IdList"])

@app.route('/dna-search')
def dna_search():
    dna = request.args.get('q')

    results = []
    for protein_sequence in protein_sequences:
        result = protein_sequence.find(dna)
        if result > 0:
            results.append(result)
    return jsonify(features=results)
