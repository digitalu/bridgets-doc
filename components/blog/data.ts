interface TreeBranch {
    readonly id?: string
    readonly label: string
    branches?: Tree
    readonly type?: 'file' | 'folder'
    comment?: string;
    readonly selected?: boolean
}

type Tree = ReadonlyArray<TreeBranch>


export const data: Tree = [
    {
      label: "src",
      id: "1",
      type:"folder",
      comment: "This is a comment",
      branches: [
        {
          label: "Pacific Northwest",
          id: "2",
          branches: [
            {
              label: "index.ts",
              type: 'file',
              id: "3",
              branches: [],
            },
            {
              label: "Beaverton / Tigard",
              type: 'file',
              id: "4",
              branches: []
            },
            {
              type: 'file',
              label: "Lake Oswego Regency",
              id: "5",
              branches: []
            }
          ]
        },
        {
          label: "Alaska",
          id: "6",
          branches: []
        }
      ]
    },
    {
      label: "Northstar Alliance",
      id: "7",
      branches: [
        {
          label: "Chicago",
          id: "8",
          branches: [
            {
              label: "Southwest Region",
              id: "9",
              branches: [
                {
                  label: "Desplains",
                  id: "10",
                  branches: []
                },
                {
                  label: "Oak Lawn",
                  id: "11",
                  branches: []
                }
              ]
            },
          ]
        },
        {
          label: "New York",
          id: "14",
          branches: [
            {
              label: "Manhattan",
              id: "15",
            },
            {
              label: "Queens",
              id: "16",
            },
            {
              label: "5372 Arlington Heights",
              id: "17",
            },
            {
              label: "The Earlmore Institute of Health",
              id: "18",
            },
          ]
        }
      ]
    }
  ]
  