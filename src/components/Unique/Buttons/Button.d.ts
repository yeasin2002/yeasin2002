interface UniqueBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface BlueStar extends UniqueBtn {
  children: React.ReactNode;
}
interface KindCougar extends UniqueBtn {
  children: React.ReactNode;
  title: string;
}
interface SpaceBtn extends UniqueBtn {
  title: string;
}
interface OverText extends UniqueBtn {
  text: string;
}
interface FoldTextBtn extends UniqueBtn {
  children: React.ReactNode;
}
