import './index.css'
import { Button } from "@/components/ui/button"
import ModalComponent from './mycomponents/modal'; // Import the Modal
import React, { useState } from 'react';
import Contact from './Contact';

export default function Home() {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex min-h-screen">
{/*Left Side Bar */}
  <aside class="w-1/4 bg-gray-200 p-4">
    <h2 class="text-lg font-semibold">Menu</h2>
    <ul class="mt-4 space-y-2">
      <li><a href="#" class="block p-2 bg-gray-300 rounded">Dashboard</a></li>
      <li><a href="#" class="block p-2 bg-gray-300 rounded">Settings</a></li>
      <li><a href="#" class="block p-2 bg-gray-300 rounded">Profile</a></li>
      <li><a href="#" class="block p-2 bg-gray-300 rounded">Logout</a></li>
    </ul>
  </aside>

{/*MainContent */}
  <main class="flex-1 bg-white p-6">
    <h1 class="text-2xl font-bold">TaskMaster</h1>
    <p class="mt-4">Welcome to TaskMaster, click the initiate task button to begin.</p>
    <Button className="mt-5 tskbtn_1" onClick={toggleModal}>Initiate Task</Button>

    {/* Modal Component */}
    <ModalComponent isOpen={isModalOpen} toggleModal={toggleModal} />
  </main>

{/*RightSideBar*/}
  <aside class="w-1/4 bg-gray-100 p-4">
    <h2 class="text-lg font-semibold">Tasks</h2>
    <ul class="mt-4 space-y-2">
      <li><a href="#" class="block p-2 bg-gray-200 rounded">Task 1</a></li>
      <li><a href="#" class="block p-2 bg-gray-200 rounded">Task 2</a></li>
      <li><a href="#" class="block p-2 bg-gray-200 rounded">Task 3</a></li>
      <li><a href="#" class="block p-2 bg-gray-200 rounded">Task 4</a></li>
    </ul>
  </aside>
  <Contact />
</div>

  )
}

