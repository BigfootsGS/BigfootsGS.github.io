var linkparameters = location.search.split('url=')[1];





setTimeout(loading, 5200);


//function definition

function loading() {
    if (linkparameters == null){
        location.assign("../../../../");

    }else {
        location.assign("../"+linkparameters);

    }


}




