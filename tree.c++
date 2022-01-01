#include<iostream>
using namespace std;

struct tree
{
    int data ;
    struct tree *lnode;
    struct tree *rnode;
};
struct tree* bstinseart(struct tree *root,int key)
{
    struct tree *temp;

    if(root==NULL)
    {
        temp= (struct tree *)malloc(sizeof(struct tree));
        temp->data=key;
        temp->lnode=NULL;
        temp->rnode=NULL; 
    }
    else if(key<root->data)
    {
        root->lnode=bstinseart(root->lnode,key);
    }
    else if(key>root->data)
    {
        root->rnode=bstinseart(root->rnode,key);
    }
    return root;
}

void inorder(struct tree* root)
{
    inorder(root->lnode);
    cout<<root->data;
    inorder(root->rnode);
}
int main()
{

}