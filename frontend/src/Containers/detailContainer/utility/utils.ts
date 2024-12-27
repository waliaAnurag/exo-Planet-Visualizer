export const masterFieldValues:Array<MasterFieldValueMeta> = [
    {
        key:"discoverymethod",
        value:"Discovery Method",
        operator:[{key:"discOp",value:"="}],
        subValues:[{key:"firstMethod",value:"Transit"},{key:"secondMethod",value:"Radial Velocity"}]
    },
    {
        key:"soltype",
        value : "Solution Type",
        operator:[{key:"solOp",value:"="}],
        subValues:[
            {
                key:'sol1',
                value:"Publichsed Confirmed"
            },
            {
                key:'sol2',
                value:"Candidate"
            },
            {
                key:'sol3',
                value:"False Positive"
            },
            {
                key:'sol4',
                value:"Under Review"
            },
            {
                key:'sol5',
                value:"Unpublished Confirmed"
            },
            {
                key:'sol6',
                value:"Controversial"
            }
        ]

    },
    {
        key:"pl_orbper",
        value:"Orbital Period [days]",
        operator:[{key:"plF",value:">="},{key:"plS",value:"<="},{key:"plT",value:"="},{key:"plFo",value:">"},{key:"plFi",value:"<"}],
        subValues:[{key:"plOrb1",value:1},{key:"plOrb2",value:10},{key:"plOrb3",value:22},{key:"plOrb3",value:22},{key:"plOrb4",value:7},{key:"plOrb5",value:30},{key:"plOrb6",value:31},{key:"plOrb5",value:365},{key:"plOrb6",value:500}]
    },
]