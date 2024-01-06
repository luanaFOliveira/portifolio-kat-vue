import os
import json

def criar_documento_json(diretorio):
    arquivos = os.listdir(diretorio)

    dados = []

    for i, arquivo in enumerate(arquivos):
        info_arquivo = {'id': i+1, 'titulo': arquivo}

        dados.append(info_arquivo)

    documento_json = json.dumps(dados, indent=2)

    with open('photos.json', 'w') as arquivo_json:
        arquivo_json.write(documento_json)

if __name__ == "__main__":
    criar_documento_json('./thumbnails')
