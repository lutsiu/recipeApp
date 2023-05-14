import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {useRef} from 'react';
export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    if (query) {
      navigate(`query?q=${query}`);
      inputRef.current.value = '';
    }
  };

  return (
    <form
      className="search-bar flex bg-white rounded-xl overflow-hidden px-[0.2rem] py-[0.1rem] max-w-min relative z-30"
      onSubmit={handleSubmitForm}
    >
      <input
        type="text"
        ref={inputRef}
        className="duration-500 w-0 outline-none text-black text-base mr-[0.3rem] "
        placeholder="Search recipes..."
        
      />
      <IoSearchOutline className="icon text-emerald-500 " onClick={handleSubmitForm}/>
    </form>
  );
}
