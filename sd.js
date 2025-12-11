arr=[
       { country: 'Russia',  city: 'Moscow' },
       { country: 'Belarus', city: 'Minsk' },
       { country: 'Poland',  city: 'Warsaw' },
       { country: 'Russia',  city: 'Saint Petersburg' },
       { country: 'Poland',  city: 'Krakow' },
       { country: 'Belarus', city: 'Brest' }
    ]


function sortCitiesArray(arr) {
  sortArr = arr.sort((a,b)=>{
		if (a.country > b.country) {
			return 1;
		}
		if (a.country < b.country) {
			return -1;
		}
		if(a.country === b.country){
			if (a.city > b.city) {
				return 1;
			}
			if (a.city < b.city) {
				return -1;
			}
			return 0
		}
		return 0
	})
	return sortArr
}

console.log(sortCitiesArray(arr))