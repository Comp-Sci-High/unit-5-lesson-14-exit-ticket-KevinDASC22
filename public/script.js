// Create a function that tests the post route handler [2 pts]
async function newPotion(){
    try{
        const response = await fetch(base+"",{
            method:"POST",
            headers:{
                "Content-Type":"applicaton/json"
            },
            body:JSON.stringify({
                label:"speed potion",
                effect:"makes you run fast",
                ingredients:"ripped which craft pages and goat blood",
                color:"purple",
                isExplosive:true,

            })
            
        }

        )
    }
}


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

