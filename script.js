const API_URL = 'https://dragonball-api.com/api/characters?limit=50';

async function fetchCharacters() {
    const container = document.getElementById('characters-list');

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const characters = data.items;

        container.innerHTML = '';

        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';

            card.innerHTML = `
                <div class="char-img-container">
                    <img src="${character.image}" alt="${character.name}" class="char-img">
                </div>
                <div class="char-info">
                    <h2>${character.name}</h2>
                    <span class="subtitle">${character.race} - ${character.gender}</span>
                    
                    <div class="stats">
                        <div class="stat-item">
                            <strong>Base KI:</strong>
                            <span>${character.ki}</span>
                        </div>
                        <div class="stat-item">
                            <strong>Total KI:</strong>
                            <span>${character.maxKi}</span>
                        </div>
                        <div class="stat-item">
                            <strong>Affiliation:</strong>
                            <span>${character.affiliation}</span>
                        </div>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error cargando API:', error);
        container.innerHTML = '<p>Error al cargar los guerreros Z.</p>';
    }
}

fetchCharacters();