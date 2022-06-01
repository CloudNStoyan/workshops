import * as React from "react";

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

type WithUserProps = {
  user: UserModel;
};

const currentUser = {
  displayName: "J Mascis",
  accountId: "123",
  isVerified: true
};

function withUser<T extends WithUserProps>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof WithUserProps>) => {
    return <Component {...(props as T)} user={currentUser} />;
  };
}

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const NameTagWithUser = withUser(NameTag);

const Application = () => <NameTagWithUser salutation="Howdy" />;

export default Application;