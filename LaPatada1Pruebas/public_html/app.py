

# Created on : 19/09/2023, 1:13:57 p. m.
# Author     : mint


# This is a sample Python script.

# Press Shift+F6 to execute it or replace it with your code.


def print_hi(name):
    print(f"Hi, {name}")


if __name__ == "__main__":
    print_hi("Netbeans")

from flask import Flask, render_template

app = Flask(__name__)

# Lista de URLs de las imágenes que quieres mostrar en el slider
imagenes = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400"
]

@app.route('/')
def index():
    return render_template('index.html', img=img)

if __name__ == '__main__':
    app.run(debug=True)
