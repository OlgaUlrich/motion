export let setLike = (id, loggedLike) =>{

      const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${id}/`
        const method = 'POST'
         const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NjY5NDI0LCJqdGkiOiI1ZDM2Y2RhMTZhZDg0Njg3YWYyZDM2YjYyOThiNTdhNCIsInVzZXJfaWQiOjExNDB9.zZTB51ukivDkJ8iKLVqZVQkzjd7tf1DmgSrwzeGuAt8'
        const headers = new Headers({
            authorization: `Bearer ${token}`

        })

        fetch(url, {
            method,
            headers: headers,
        })
            .then((response) => {
                return response.json()
                
            })
          
         }