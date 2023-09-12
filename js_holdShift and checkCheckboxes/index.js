const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    // check if shift key wwas down
    // and check they are checking it and not unchecking it
    let inBetween = false
    if(e.shiftKey && this.checked){
        // now we do the main code
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Staarting to the last')
            }

            if(inBetween){
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))