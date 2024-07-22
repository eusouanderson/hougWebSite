'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
};

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="flex relative items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="absolute flex items-center justify-center bg-black/50 backdrop-blur-md min-h-screen min-w-full z-10">
        <div className="w-2/4 h-2/4 mx-auto bg-white p-8 rounded-2xl shadow-lg my-20 z-20">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {isLogin ? "Fazer Login" : "Fazer Cadastro"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input
              {...register("email", { required: true })}
              placeholder="Digite seu Email"
              className="p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-red-500">Este campo é obrigatório</span>}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Senha"
              className="p-2 border border-gray-300 rounded"
            />
            {errors.password && <span className="text-red-500">Este campo é obrigatório</span>}

            <button type="submit" className='flex flex-col group max-h-[45px] px-8 py-2 rounded text-center font-bold bg-black text-2xl text-white overflow-hidden hover:scale-[103%] transition-all duration-500 ease-in-out'>
              <span className='group-hover:-translate-y-10 mx-auto translate-y-0 transition-all duration-500 ease-in-out'>{isLogin ? "Entrar" : "Cadastrar"}</span>
              <span className='group-hover:-translate-y-8 mx-auto translate-y-0 transition-all duration-500 ease-in-out'>{isLogin ? "Entrar" : "Cadastrar"}</span>
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black hover:underline"
            >
              {isLogin ? "Novo por aqui? Fazer Cadastro" : "Já tem uma conta? Fazer Login"}
            </button>
            <button className="text-black hover:underline">
              Esqueceu a Senha?
            </button>
          </div>
          <p className="text-center text-xs mt-4">Ao continuar com o acesso, você concorda com a nossa Política de Privacidade <br />Este site é protegido pelo reCAPTCHA e são aplicáveis as Políticas de Privacidade e Termos de Serviço do Google.</p>
        </div>
      </div>

      <video autoPlay loop muted className="absolute min-w-[110vw] min-h-screen z-0">
        <source src="/videos/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
