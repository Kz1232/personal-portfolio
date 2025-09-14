import emailjs from '@emailjs/browser';
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () =>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
});
    


    

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID,e.target, 
        import.meta.env.VITE_PUBLIC_KEY,
      ).then(
        () => {
          alert('SUCCESSFULLY SENT!!');
          setFormData({name:"",email:"",message:"",})
        }).catch(()=>alert("Somthing went wrong try again") );
      
  };

    return <section id="contact" className="min-h-screen flex justify-center items-center py-20">

        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className=" text-4xl mb-8 font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get in Touch</h2>
            

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    required 
                    value={formData.name}
                    className="w-full py-3 px-4 rounded border bg-white/5 border-white/10 text-white focus:outline-none transition focus:border-blue-500 focus:bg-blue-500/5 "
                    placeholder="Name here"
                    onChange={
                        (e)=>setFormData({...formData, name: e.target.value})
                    }
                    />

                </div>
                <div className="relative">
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email} 
                    className="w-full py-3 px-4 rounded border bg-white/5 border-white/10 text-white focus:outline-none transition focus:border-blue-500 focus:bg-blue-500/5 "
                    placeholder="example@gmail.com"
                    onChange={
                        (e)=>setFormData({...formData, email: e.target.value})
                    }
                    />

                </div>
                <div className="relative">
                    <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required 
                    value={formData.message}
                    className="w-full py-3 px-4 rounded border bg-white/5 border-white/10 text-white focus:outline-none transition focus:border-blue-500 focus:bg-blue-500/5 "
                    placeholder="Message....."
                    onChange={
                        (e)=>setFormData({...formData, message: e.target.value})
                    }
                    />

                </div>
                <div className="relative">
                <button type="submit"
                 className=" w-full text-white rounded py-3 px-3 bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all"
                >Submit</button>
                </div>
            </form>
            </div>
        </RevealOnScroll>

    </section>
}