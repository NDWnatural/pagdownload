function download() {
    const videoUrl = document.getElementById('videoUrl').value;
  
    if (!videoUrl) {
      alert('Por favor, insira a URL do vídeo.');
      return;
    }
  
    fetch('/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
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
  