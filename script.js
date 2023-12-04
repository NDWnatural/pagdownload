

function download() {
    const apiUrl = 'AIzaSyBQ5XNW5tzUbFiqSX2Ldrbe-O4GeIt9Z_c';
    const videoUrl = document.getElementById('videoUrl').value;

    if (!videoUrl) {
        alert('Por favor, insira a URL do vídeo.');
        return;
    }

    fetch("https://abobus-snowy.vercel.app"), {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
        body: `videoUrl=${encodeURIComponent(videoUrl)}`,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao iniciar o download.');
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'audio.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error(error);
        alert('Erro ao processar o download.');
    });
}

  
