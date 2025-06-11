import Deporte from "../entities/Deporte";

const urlBase = "http://localhost:8081";
const basic = btoa("admin:admin123");

export async function getDeportes(): Promise<Deporte[]> {
  const response = await fetch(`${urlBase}/deportes`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// 2) Función para crear y añadir <option> al <select>:
function populateMovieSelector(selector: HTMLSelectElement, deporte: Deporte[]) {
  // Limpia opciones previas si las hubiera (dejando el placeholder):
  selector.querySelectorAll('option:not([value=""])')
    .forEach(opt => opt.remove());

  // Para cada película, crea un <option>:
  deporte.forEach((d) => {
    const option = document.createElement('option');
    option.value = d.id.toString();    // value = "1", "2", ...
    option.textContent = d.deporte;      // texto visible
    selector.appendChild(option);
  });
}

// 4) Arranca en DOMContentLoaded:
document.addEventListener('DOMContentLoaded', async () => {
  const select = document.getElementById('movieSelector') as HTMLSelectElement;
  if (!select) return;

  try {
    const listaPeliculas = await getDeportes();
    populateMovieSelector(select, listaPeliculas);

  } catch (err) {
    console.error('Error al cargar películas:', err);
  }
});