from flask import Flask
from Bio import Entrez

app = Flask(__name__)

@app.route('/')
def hello_bio():
    Entrez.email = "hanclee@yahoo.com"
    handle = Entrez.esearch(db="nucleotide", term="Cypripedioideae", retmax=814, idtype="acc")
    record = Entrez.read(handle)
    handle.close()
    return "<h1>Hello, Bio!</h1><h2>Nucleotides</h2>" + "<br/>".join(record["IdList"])
