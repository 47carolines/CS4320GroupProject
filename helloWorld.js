const options = {
  url: 'http://augur.resumespace.tech/api/unstable/repos/:repo_id/issue-comments-mean',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'X-API-KEY': bundle.authData.api_key
  },
  params: {
    'repo_id': bundle.inputData.repo_id
  }
}

return z.request(options)
  .then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.map((repo)=>{

      repo.id = repo.repo_id;
    
      return repo;
       
     });
  });