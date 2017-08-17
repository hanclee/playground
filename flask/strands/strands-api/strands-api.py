from flask import Flask, render_template, jsonify, request
from Bio import Entrez

app = Flask(__name__)

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

    Entrez.email = "hanclee@yahoo.com"
    handle = Entrez.esearch(db="nucleotide", term=dna, retmax=1000, idtype="acc")
    record = Entrez.read(handle)
    handle.close()
    return jsonify(ids=record["IdList"])
