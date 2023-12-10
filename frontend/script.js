function fetchData() {
                              fetch('http://localhost:5700/getall/passdata')
                                  .then(response => {
                                      if (!response.ok) {
                              //             throw new Error('Network response was not ok');
                              console.log("error");
                                      }
                                      return response.json();
                                  })
                                  .then(data => {
                                      displayData(data);
                                  })
                                  .catch(error => {
                                      console.error('Error fetching data:',error);
                                  });

}
function displayData(data) {
                              
                              data.forEach(item => {
                                                            document.getElementsByClass('.table-text').textContent=item.last;
                                                         
                              });
                          }
       fetchData();                   