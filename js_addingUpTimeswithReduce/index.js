const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
                .map(node => node.dataset.time)//take out the time from datasets
                .map(timeCode => {
                    const [mins, secs] = timeCode.split(":").map(parseFloat)
                    return (mins * 60) + secs;
                })//split the time into their values and changing the mins into secs
                .reduce((total, seconds) => {
                    return total + seconds
                }, 0) //adding all the values to get total time in seconds


        let secondsLeft = seconds;
        const hours = Math.floor(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;
        
        const mins = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft % 60;

        console.log(hours, mins, secondsLeft);