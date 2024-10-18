import { timeAgo } from "utils/commonUtils";
import Dropdown from "components/Dropdown";
import AuthorInfo from "./AuthorInfo";
import styles from "./Comment.module.css";
import kebabIcon from "assets/images/ic_kebab.svg";

const Comment = ({ content, writer, createdAt, onSelect }) => {
  const options = {
    edit: "수정하기",
    remove: "삭제하기",
  };

  return (
    <li className={styles.comment}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
        <Dropdown
          className={styles.dropdown}
          onSelect={onSelect}
          options={options}
        >
          <img
            src={kebabIcon}
            alt="수정/삭제 드롭다운 보이기"
            className={styles.kebab}
          />
        </Dropdown>
      </div>
      <AuthorInfo
        className={styles.authorInfo}
        nickname={writer.nickname}
        image={writer.image}
        date={timeAgo(createdAt)}
      />
    </li>
  );
};

export default Comment;
