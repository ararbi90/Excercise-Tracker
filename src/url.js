const pradUrl = "";
const devUrl = "http://localhost:5000/";
let mode = "prad";
let url = devUrl;
if(mode === "prad")
{
    url = pradUrl;
}

export default url;
