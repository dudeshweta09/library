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
    <div className=" w-7/12 mx-auto">
        <div className="flex mx-auto w-full max-w-md items-center space-x-2">
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
        <div className=" w-full">{search.length > 0 && <div className=" w-full">{searchResult.map((item)=>{
          return(<div className=" w-full mx-auto mt-2 grid grid-cols-4 gap-2">
            <span className=""><b>Title</b> - {item.title} </span>
            <span className=" text-center"><b>Author Name</b> - {item.author_name} </span>
            <span className=" text-center"><b>E-Book Access</b> - {item.ebook_access} </span>
            <span className=" text-center"><b>Ratings</b> - {item.ratings_count} </span>
          </div>)
        })}</div>}</div>
    </div>
  );
};

export default SearchBook;
