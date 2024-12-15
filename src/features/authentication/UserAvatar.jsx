import styled from "styled-components";
import useUser from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 3 0px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;


`;

export default function UserAvatar() {
    const { user } = useUser();
    const { name } = user;

    return (
        <StyledUserAvatar>
            <Avatar src="default-user.jpg" />
            <span className="text-white hover:cursor-pointer">Xin chào, {name}</span>
        </StyledUserAvatar>
    );
}
