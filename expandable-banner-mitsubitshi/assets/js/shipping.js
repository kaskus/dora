//shipping track
function OtherSelectCheck(nameSelect)
{
    if(nameSelect){
        jasaOptionValue = document.getElementById("jasaLain").value;
        if(jasaOptionValue == nameSelect.value){
            document.getElementById("namajasa").style.display = "block";
            document.getElementById("input-jasa").style.display = "table";
            document.getElementById("jasa-text").style.display = "none";
        }
        else{
        	document.getElementById("namajasa").style.display = "none";
            document.getElementById("input-jasa").style.display = "none";
            document.getElementById("jasa-text").style.display = "block";
        }
    }
    else{
    	document.getElementById("namajasa").style.display = "none";
        document.getElementById("input-jasa").style.display = "none";
    }
}
