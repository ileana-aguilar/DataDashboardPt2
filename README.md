For books on table in <App/> (main page path '/')

https://openlibrary.org/trending/yearly.json

json example:

```
{"query": "/trending/yearly", 
    "works": [{"author_key": ["OL12780216A"], 
                "author_name": ["Zana Kheiron"], 
                "cover_i": 14321120, 
                "edition_count": 15, 
                "first_publish_year": 2019, 
                "has_fulltext": false, 
                "key": "/works/OL35351151W", 
                "language": ["por"], 
                "public_scan_b": false, 
                "title": "Um casamento arranjado"},
                
                 {"author_key": ["OL7422948A"], 
                    "author_name": ["James Clear"], 
                    "cover_edition_key": "OL36647151M", 
                    "cover_i": 12539702, 
                    "edition_count": 41, 
                    "first_publish_year": 2016, 
                    "has_fulltext": true, 
                    "ia": ["atomichabitseasy0000clea"], 
                    "ia_collection_s": "internetarchivebooks;printdisabled", 
                    "key": "/works/OL17930368W", 
                    "language": ["spa", "eng", "tur", "ind", "por", "fre"], 
                    "public_scan_b": false, 
                    "title": "Atomic Habits", 
                    "availability": {"status": "private", 
                                        "available_to_browse": false,        "available_to_borrow": false, 
                                        "available_to_waitlist": false, 
                                        "is_printdisabled": true, 
                                        "is_readable": false, 
                                        "is_lendable": false, 
                                        "is_previewable": true, 
                                        "identifier": "atomichabitseasy0000clea", 
                                        "isbn": "9781847941831", 
                                        "oclc": null, 
                                        "openlibrary_work": "OL17930368W", "openlibrary_edition": "OL27918581M", 
                                        "last_loan_date": null, 
                                        "num_waitlist": null, 
                                        "last_waitlist_date": null, 
                                        "is_restricted": true, 
                                        "is_browseable": false, 
                                        "__src__": "core.models.lending.get_availability"}},
}
```



For book details info, https://openlibrary.org${bookkey}.json:

json example:

```
bookkey = '/works/OL35351151W/'
https://openlibrary.org/works/OL35351151W.json

{"title": "Um casamento arranjado", 
    "authors": [{"author": {"key": "/authors/OL12780216A"}, "type": {"key": "/type/author_role"}}], 
    "key": "/works/OL35351151W", 
    "type": {"key": "/type/work"}, 

    "description": "Uma historia de uma familia falida q faz acordo com outra familia rica  e sua filha mais velha e cedida em troca. O filho da fam\u00edlia rica teve um acidente de avi\u00e3o que queimou 50% do seu corpo e casa c essa linda moca e se apaixonam", 
    
    "subjects": ["romance", "love"], 
    "covers": [14321120, -1], 
    "latest_revision": 5, 
    "revision": 5, 
    "created": {"type": "/type/datetime", 
                "value": "2023-05-06T03:28:20.381165"}, 
    "last_modified": {"type": "/type/datetime", 
                        "value": "2023-08-30T20:13:08.577946"}}

```






For ratings info, https://openlibrary.org${bookkey}/ratings.json:

json example:

```

bookkey = '/works/OL35351151W/'

https://openlibrary.org/works/OL35351151W/ratings.json

{"summary": {"average": 4.127289377289378, 
                "count": 1092, 
                "sortable": 4.047196797555351}, 
            "counts": {"1": 175, 
                        "2": 27,
                        "3": 43, 
                        "4": 86, 
                        "5": 761}}
```
