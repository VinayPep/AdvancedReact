export const logProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props}></Component>;
  };
};

/*
 * const UserInfoWrapper = logProps(UserInfo);
 *
 * <UserInfoWrapper/>
 */
