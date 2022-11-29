
window.addEventListener('load', function () {
    const countryList =  document.getElementById('countries');
    
    const fetchAndLog = async () => {
        const response = await fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json');
        const json = await response.json();

        let newCountry='';
        json.forEach(country => {
            newCountry += `<option value=${country.name} id="addedCountry" >${country.name}</option>`
            
        })

        countryList.innerHTML = newCountry;

    }
    fetchAndLog();



    
  })
