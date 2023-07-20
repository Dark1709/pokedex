import { onMounted, reactive } from "vue";
import { getRandomImage } from "../../services/pokemon.service";

export function useGetRandomPokemon() {
  const pokemon = reactive({
    name: "",
    image: "",
  });

  onMounted(async () => {
    try {
      const [name, image] = await getRandomImage();
      pokemon.name = name;
      pokemon.image = image;
    } catch {
      throw new Error("Ha ocurrido un error al obtener la imagen del Pokémon");
    }
  });
  return {
    pokemon,
  };
}
