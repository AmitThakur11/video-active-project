import {userReducer , initialState} from "./reducer"

describe("updating user data",()=>{

    test("fetching videoList",()=>{

        const payload  = [
            {
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"

            }
        ]


        const expecting = {
            videoList : [
                {
                    _id : 1,
                    title : "video 1",
                    url : "https://xyz.png"
                }
            ],
            username : "test",
            likedVideos : [],
            history : [],
            playlists : []
            }


    const loadData =  userReducer(initialState,{type : "LOAD VIDEOLIST",payload})
    expect(loadData).toEqual(expecting)

    })

    test("loading user data",()=>{
        const payload = {
            username : "test",
            likedVideos : [{
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"
            }],
            history : [{
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"
            }],
            playlists : [
                {
                title :"watch later",
                data : [
                    {
                        _id : 1,
                title : "video 1",
                url : "https://xyz.png"

                    }
                ]}
            ]
            }

            const expecting = {
                videoList : [],
                username : "test",
                likedVideos : [{
                    _id : 1,
                    title : "video 1",
                    url : "https://xyz.png"
                }],
                history : [{
                    _id : 1,
                    title : "video 1",
                    url : "https://xyz.png"
    
                }],
                playlists : [
                    {
                    title :"watch later",
                    data : [
                        {
                            _id : 1,
                    title : "video 1",
                    url : "https://xyz.png"
    
                        }
                    ]}
                ]
                }
        
        const loadUser = userReducer(initialState,{type :"LOAD USER",payload:payload})
        expect(loadUser).toEqual(expecting)
        


    
    })


    test("add video in liked videos",()=>{
        const payload = [
            {
                _id : "1",
                title : "video 1",
                url : "https://xyz"
            }
        ]


    const loadUser = userReducer(initialState,{type : "UPDATE LIKE" , payload : payload})
    const expecting = {
        videoList : [],
        username : "test",
        likedVideos : [
            {
                _id : "1",
                title : "video 1",
                url : "https://xyz"
            }
        ],
        history : [],
        playlists : []
    }

    expect(loadUser).toEqual(expecting)


    })



    test("adding video to history",()=>{
        const payload = [
            {
                _id : "1",
                title : "video 1",
                url : "https://xyz"
            }
        ]


    const loadUser = userReducer(initialState,{type : "UPDATE HISTORY" , payload : payload})
    const expecting = {
        videoList : [],
        username : "test",
        history : [
            {
                _id : "1",
                title : "video 1",
                url : "https://xyz"
            }
        ],
        likedVideos : [],
        playlists : []
    }

    expect(loadUser).toEqual(expecting)




    })


    test("adding videos to playlist",()=>{

        const payload  =[{ title : "watch later",
            data:  [
            {
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"

            }
        ]
    }
]



        const expecting = {
            videoList : [],
            playlists : [
                { 
                    title : "watch later",
                    data:  [
                            {
                                _id : 1,
                                title : "video 1",
                                url : "https://xyz.png"

                            }
                        ]
                }
            ],
            username : "test",
            likedVideos : [],
            history : []

            }


    const loadData =  userReducer(initialState,{type : "UPDATE PLAYLIST",payload})
    expect(loadData).toEqual(expecting)

    })


    test(" logging out ",()=>{
        const initialUser = {
            videoList : [{
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"
            }],
            username : "test",
            likedVideos : [{
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"
            }],
            history : [{
                _id : 1,
                title : "video 1",
                url : "https://xyz.png"

            }],
            playlists : [
                {
                title :"watch later",
                data : [
                    {
                        _id : 1,
                title : "video 1",
                url : "https://xyz.png"

                    }
                ]}
            ]
        }

        const expecting = {
            videoList : [
                {
                    _id : 1,
                    title : "video 1",
                    url : "https://xyz.png"
                }
            ],
            username : "test",
            likedVideos : [],
            history : [],
            playlists : []
            }

        const loadUser = userReducer(initialUser,{type : "LOG OUT"})
        expect(loadUser).toEqual(expecting)
    })






    
})
