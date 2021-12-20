const options = {
  url: 'http://augur.resumespace.tech/api/unstable/repo-groups/' + bundle.inputData.repo_group + '/top-insights',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'X-API-KEY': bundle.authData.api_key
  },
  params: {
    //'repo_group': bundle.inputData.repo_group
  }
}

return z.request(options)
  .then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.map((repo)=>{
      repo.id = repo.date;
      return repo;
    });
  });
