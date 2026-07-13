import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="">
      <img style={{ maxHeight: '170px' }} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
