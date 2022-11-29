function addStates() {
    const currentCountry =this.document.getElementById('countries').value;
    const stateList = document.getElementById('states');

    console.log(currentCountry);
    const fetchAndLog = async () => {
        const response = await fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json');
        const json = await response.json();
        
        json.forEach(element => {
            if(element.name.match(currentCountry)){
               const stateName = element.states;
               let output = '';
               stateName.forEach(element =>{
                    output += `<option value=${element.name} id="addedStates" >${element.name}</option>`
               })

               stateList.innerHTML = output;

            }
        }); 

    }
    fetchAndLog();
   
}
    