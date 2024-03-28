"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import LogOut from "./log-out";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



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

  const onKeyDown = (e: { key: string; }) =>{
    if(e.key == 'Enter'){
      handleClick(search);
    }
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  };
  return (
    <div className=" w-7/12 mx-auto">
        <div className="flex mx-auto w-full max-w-md items-center space-x-2">
          <Input
          className=" text-lg"
            value={search}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            placeholder="Search your Book"
          />
          <Button className=" text-xl" type="button" onClick={() => handleClick(search)}>
            Search
          </Button>
          <LogOut/>
        </div>
        <div className=" w-full">{search.length > 0 && <div className=" w-full">
          <Table>
            <TableCaption><b>A list of your recent search</b></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]"><b></b>Title</TableHead>
                <TableHead>Author Name</TableHead>
                <TableHead>E-Book Access</TableHead>
                <TableHead>Ratings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchResult.map((item)=>(
                <TableRow>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.author_name}</TableCell>
                  <TableCell>{item.ebook_access}</TableCell>
                  <TableCell>{item.ratings_count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>}</div>
    </div>
  );
};

export default SearchBook;
