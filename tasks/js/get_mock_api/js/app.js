/* Get API (Банкомати м.Ужгород) from mock
https://dmitrijpedan.github.io/mock_geo_api/list.json */

const apiData = fetch('https://dmitrijpedan.github.io/mock_geo_api/list.json?json');
apiData
    .then(response => response.json())
    .then(response => {
        let res = getPlaceATM (response);
        console.log(res);
        console.log(response);
        alert(res);
    })
    .catch((error) => {
        console.log(error);
    });

function getPlaceATM (obj) {
    let array = [];
        for (let i in obj.devices) {
        let j = `- ${obj.devices[i].placeUa}`;
        array.push(j)
        }
    let result = `${obj.devices[0].cityUA}:\n${array.join('\n')}`;
    return result;
}


