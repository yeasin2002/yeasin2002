interface UniqueBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface BlueStar extends UniqueBtn {
  children: React.ReactNode;
}
interface KindCougar extends UniqueBtn {
  children: React.ReactNode;
  title: string;
}
