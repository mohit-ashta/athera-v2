import { HandPeace } from "@/lib/icons/hand-peace";
import { HandsPraying } from "@/lib/icons/hands-praying";
import { Heart } from "@/lib/icons/heart";
import { Smiley } from "@/lib/icons/smiley";
import { SmileySad } from "@/lib/icons/smiley-sad";
import { Support } from "@/lib/icons/support";
type CommentProps = {
  author: string;
  date: string;
  text: string;
};

type CommentsListProps = {
  comments: CommentProps[];
};

const CommentCard: React.FC<CommentProps> = ({ author, date, text }) => {
  return (
    <div className="border-b border-primary-foreground pt-6 first:pt-0">
      <div className="flex gap-4 items-center">
        <h5 className="font-bold lg:text-lg text-md leading-5 text-secondary">
          {author}
        </h5>
        <span className="font-normal lg:text-sm text-xs text-[#A3A4A2]">
          {date}
        </span>
      </div>
      <p className="font-normal lg:text-lg text-sm lg:leading-6 leading-5 mt-4 text-secondary">
        {text}
      </p>
      <div className="flex py-6 items-center gap-2">
        <Smiley className="fill-[#A3A4A2]" />
        <Heart className="fill-[#A3A4A2]" />
        <HandPeace className="fill-[#A3A4A2]" />
        <HandsPraying className="fill-[#A3A4A2]" />
        <Support className="fill-[#A3A4A2]" />
        <SmileySad className="fill-[#A3A4A2]" />
      </div>
    </div>
  );
};

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="bg-card-foreground p-6 rounded mt-[25px] lg:max-h-[492px] max-h-[392px] overflow-y-scroll custom-scroll">
      {comments.map((comment, index) => (
        <CommentCard key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentsList;
