const WithoutPermissionComponent = () => {
    return (
        <div
            className="h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
        >
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-8 justify-center">
                    <p className="text-base font-semibold text-indigo-600">401</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Usuario sin permisos</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">No tenés los suficientes permisos.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="/" className="text-sm font-semibold text-gray-900">Volve al inicio<span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default WithoutPermissionComponent;
