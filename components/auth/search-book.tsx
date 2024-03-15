"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import LogOut from "./log-out";

export interface SearchBookProps {
  searchParams: string;
}
const SearchBook = ({ searchParams }: SearchBookProps) => {
  const [bookName, setBookName] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?author=tolkien")
      .then((response) => response.json())
      .then((bookName) => setBookName(bookName.docs));
  }, []);

  const handleClick = (search: any) => {
    setSearch(search);
    if (search !== "") {
    const newBookList = bookName.filter((book) => {
      return Object.values(book)
        .join(" ")
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    setSearchResults(newBookList)
    } else{
      setSearchResults(bookName)
    }
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  };
  return (console.log(searchResult),
    <div>
        <div className="flex mx-auto w-full max-w-sm items-center space-x-2">
          <Input
          className=" text-lg"
            value={search}
            onChange={handleChange}
            placeholder="Search your Book"
          />
          <Button className=" text-xl" type="button" onClick={() => handleClick(search)}>
            Search
          </Button>
          <LogOut/>
        </div>
        <div>{search.length > 0 && <ol>{searchResult.map((item)=>{
          return(<div className=" w-4/5 mx-auto mt-2 grid grid-cols-4 gap-4">
            <span>Title - {item.title} </span>
            <span>Author Name - {item.author_name} </span>
            <span>E-Book Access - {item.ebook_access} </span>
            <span>Ratings - {item.ratings_count} </span>
          </div>)
        })}</ol>}</div>
    </div>
  );
};

export default SearchBook;
