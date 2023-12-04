# How this project started and directions

That's a resource git repository I've started on Mission Ready 2023 Class.
Initially I'll keep everything in one single file, but as the file grows I might
work on a folder and file structure for each section.

I did make it as a JSON format. Just I can make some HTML/CSS/JS
magic on it later. Or just to have it as a Database experience.

## Structure and Pattern of Database

The structure of it is very simple, so I'd appreciate if everyone adding and
contributing could make some effort to keep it consistent.

The entries are not always the same, but they follow the same pattern/logic.
section => title, link, description, level. So far this is what made more sense for
me as a MUST have on each entry and section.

There are 5 sections so far. I'll try to explain them in a JSON format here.

Ex:.

```
    "learningChannels": [
        {
            "title": "value",
            "link": "value",
            "description": "value"
        },
        ...
    ],

    "languages": {
        "language": [
            {
                "title": "value",
                "link": "value",
                "description": "value",
                "level" : "value"
            },
            ...
        ],
        "language2": [
            {
                "title": "value",
                "link": "value",
                "description": "value",
                "level" : "value"
            },
            ...
        ]
    },

    "tools": {
        "category/software": "value",
        "link": "value",
        "description": "value"
    },
    ...

    "generalDiscussions": {
        "category/topic": {
            "title": "value",
            "link": "value",
            "dsecription": "value"
        }
    }
```

It's a open project so we can all add anything you think it's usefull, even if it's
your own stuff. (I added a little project I made on the tools section 😁). But I'd ask you
to add only links for things that you went through and you know is good stuff.

Ex:. Things that have helped you learning a specific topics or tool. Or something that it's
important for our career development or as a programmer on this wild world.

I just ask for that so we don't spam the Resources Repo with random stuff.

##Little Snippet

To avoid repetition, I set up this project with a snippets file for the entries and sections objects.
You'll find it on the .vscode folder.

It should work as any other snippet we have been using.

---

##### For New Entry => type:

```
ne -> press Tab / Enter
```

This will give you an entry snippet.

```
{
    "title": "",
    "link": "",
    "description": "",
},
```

##### For New Section Array => type:

```
nsarr -> press Tab / Enter
```

This will give you a section Array of Objects snippet.

```
"sectionName": [
    {
        "title": "",
        "link": "",
        "description": "",
    },
]
```

##### For New Section Object => type:

```
nsobj -> press Tab / Enter
```

This will give you a section Objects of Objects snippet.

```
"sectionName": {
    {
        "title": "",
        "link": "",
        "description": "",
    },
}
```

You can navigate to the next blank spaces with tab.
