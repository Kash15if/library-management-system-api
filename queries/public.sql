
-- //book issue details
select iss.stid, iss.bookid, iss.issued_on, iss.issued_by, iss.dor
,bs.title, bs.subject, bs.author, bs.desc , bs.rackno , bs.shelfno , bs.section , bs.department
 from book_issued as iss
left join 
books as bs
on iss.bookid = bs.bookid


--top 5 trending books


select title , count(num) as count 
from
(
select title, 1 as num from book_issued as bis 
left join
books bs
on bis.bookid = bs.bookid

) as innerTab
group by title
order by count desc
limit 5





--












