
    const express = require('express') 
    const router = express.Router()
    let friends = [
      {"name":"Becky","photo":"","scores":["2","3","4","5","4","3","2","3","4","5"]},
      {"name":"Becky","photo":"","scores":["2","3","4","5","4","3","2","3","4","5"]},{"name":"Becky","photo":"","scores":["2","3","4","5","4","3","2","3","4","5"]},{"name":"Becky","photo":"","scores":["2","3","4","5","4","3","2","3","4","5"]},{"name":"Youssef","photo":"https://media.licdn.com/dms/image/C4D03AQEzsiFwPjRq8w/profile-displayphoto-shrink_100_100/0?e=1545868800&v=beta&t=vpwf0qO1UAxIQ_gVqol0s-DJ4YzfhJ9HcqUv25mmEB8","scores":["5","4","1","3","4","1","2","5","1","5"]},{"name":"Zayne","photo":"https://studentvoice.showbiz.com.cy/wp-content/uploads/2016/10/d26c511a38b62ec9a2faf464b798e755.jpg","scores":[6,5,4,3,2,1,5,4,3,2]}
    ]
    router.get('/api/friends', function (req, res) {
      return res.json(friends)
    })

    module.exports = friends
    