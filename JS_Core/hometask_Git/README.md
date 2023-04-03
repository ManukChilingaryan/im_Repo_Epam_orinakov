# First task #
1.Install git and generate a pair of ssh keys. Authorize the public key on github.com.
2.Specify your user.name and user.email in git.
3.Create a new repository on github.com and clone it locally to your computer.
4.Create a file called song.txt and put there half the text of your favorite song.
5.Make a commit called "Add first half of my favorite song" and send it to the github.
6.Make sure github has a song.txt file with the lyrics.
7.Using the github's web interface, add the second half of the lyrics and make a commit with the name "finish my song".
8.Make a pull in the local repository and make sure that the commit you created on github is pulled up and you have all the lyrics.

# Second task #
This task is performed immediately after the previous one .
1. Create a feature branch and add two commits to it
2. Merge the feature branch in master
3. Return to feature and create the arrows.txt file with the following contents:
The ship glides gently on the waves
As day turns into night
Make a commit.
4. Go to master. Create the arrows.txt file there and add the following text:
One thousand burning arrows
Fill the starlit sky
Make a commit.
5. Merge feature in master resolving the conflict: save all 4 lines in arrows.txt file in the order they were added in steps 3 and 4.

# Third task #
This task is performed after the previous one (Second task).
1. Create a storm branch and add following text to the storm.txt file:
Twenty ships with Norsemen braves
Riding the northern wind
Make a commit.
2. Add 2 more lines to storm.txt and make another commit:
They left their shores at early dawn
As a red sun was rising in the east
3. Return to master and create the pursuit.txt file with the text below:
The warming sun returns again
And melts away the snow
The sea is freed from icy chains
Winter is letting go
Make a commit.
4. Mark the commit with tag and go to the storm branch.
5. Rebase the storm branch so that it contains the last commit from the master.

# Fourth task #
1. Create a string branch and create a file called string.txt with the text below:
Hello world!
2.Make a commit called "Add Hello world to the string.txt" and send it to the string branch.
3.Add the second line to the file:
Second line.
4.Make a commit called "Add another line to the string.txt" 
5.Update commit message using --amend to the "Add the second line to the string.txt file".
6.Use reflog to see the history of your commits and remember the hash number of your latest commit
7.Undoing the latest commit using soft reset
8.Make sure the second line is still displaying in the string.txt file.
9.Stashing your changes.
10.Make sure your latest changes have disappeared
11.Bring back your changes, make a commit and send it to the string branch