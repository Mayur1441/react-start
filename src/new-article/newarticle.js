import AppHeader from "../header/header";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

import "./newarticle.css"

function NewArticle() {
    return (
        <div>
            <AppHeader></AppHeader>
            <div className="NewArticle">
                <Form>
                    <FormGroup>
                        <label for="title">Title</label>
                        <Input type="Text" name="title" placeholder="Title"/>
                    </FormGroup>
                    <FormGroup>
                        <label for="subtitle">Sub Title</label>
                        <Input type="Text" name="subtitle" id="subtitle" placeholder="Sub Title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="body">Body</Label>
                        <Input type="textarea" name="body" id="body" placeholder="Body"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" id="category">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="featuredimage">Featured Image</Label>
                        <Input type="file" name="featuredimage" id="featuredimage"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

            </div>
        </div>
    )
}

export default NewArticle