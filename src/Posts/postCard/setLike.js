export let setLike = (id, loggedLike) =>{

      const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${id}/`
        const method = 'POST'
         const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NDk5OTQ3LCJqdGkiOiI4Zjc1YTYzYWZjZjY0OTc0OWMyMDdlOGUxOTM3NTBjOCIsInVzZXJfaWQiOjExNDB9.SXCUtrEe5WYXqk0hLLuqk-TchzcLBmuQ9nMtpC-EYwA'
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