interface HEADINGPROP{
    children : React.ReactNode
}

const CustomHeader = ({children} : HEADINGPROP) => {
    return ( 
        <h1 className="text-lg font-semibold py-5">{children}</h1>
     );
}
 
export default CustomHeader;