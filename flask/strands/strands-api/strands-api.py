from flask import Flask, render_template, jsonify, request
from Bio import Entrez, SeqIO
from Bio.SeqFeature import SeqFeature, FeatureLocation

SEARCH_RESULTS_LIMIT = 100

app = Flask(__name__)
proteins = ["NC_000852", "NC_007346", "NC_008724", "NC_009899", "NC_014637", "NC_016072", "NC_020104", "NC_023423", "NC_023640", "NC_023719", "NC_027867"]
protein_records = []

@app.before_first_request
def load_fasta_data():
    for protein in proteins:
        for seq_record in SeqIO.parse("data/"+protein+".fasta", "fasta"):
            print("Loading",seq_record.id,repr(seq_record.seq),"size",len(seq_record));
            protein_records.append(seq_record)

@app.route('/')
def hello_bio():
    ids = []
    for protein_record in protein_records:
        ids.append(protein_record.id)
    return render_template('hello_world.html', ids=ids)

@app.route('/dna-search')
def dna_search():
    dna = request.args.get('q')

    results = []
    warning = ""
    if dna:
        for protein_record in protein_records:
            result = protein_record.seq.find(dna)
            while result > 0 and len(results) < SEARCH_RESULTS_LIMIT:
                result_end = result + len(dna)
                results.append({"protein_id":protein_record.id, "start":result, "end":result_end})
                result = protein_record.seq.find(dna, result_end)
    if len(results) == SEARCH_RESULTS_LIMIT:
        warning = "Search limit exceeded, returning the first {} results.".format(SEARCH_RESULTS_LIMIT)
    return jsonify({"features": results, "warning": warning})
