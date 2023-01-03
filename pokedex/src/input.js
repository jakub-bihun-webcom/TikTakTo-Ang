window.onload = function () {
  document.getElementById('button').addEventListener('click', function () {
    let inputValue = document.getElementById('input').value;
    console.log(inputValue);

    /**
     * @param inputValue
     * @returns {boolean} true wenn der UserInput zwischen 1 und 150 liegt
     */
    let isValidInput = function inputValidation(inputValue) {
      if (isNaN(inputValue)) {
        throw new Error('The Pokemon ID has to be a Number');
        return false;
      } else if (inputValue > 150 || inputValue < 0) {
        throw new Error('Only Pokemon IDs between 1 and 150 are being accepted');
        return false;
      } else {
        return true;
      }
    };

    /**
     * loggt den das Ergebnis der Abfrage mit dem UserInput
     */
    function logPokemonName() {
      getPokemonName(inputValue).then(name => console.log(name));
    }
    if (isValidInput(inputValue)) {
      logPokemonName();
    }

    /**
     * @param inputValue (wenn isValid true ist)
     * @returns {Promise<*>} (den namen des Pokemon in einem Promise Objekt)
     */
    async function getPokemonName(inputValue) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const data = await response.json();
        return data.name;
      } catch (error) {
        return 'Your Input does not return a Pokemon name. Please note that zero is not a valid Input.';
        console.error('Fehler bei der Abfrage der API');
      }
    }
  });
};
