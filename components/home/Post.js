import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import Carousel,{Pagination} from "react-native-snap-carousel";
import React, { useState, useref } from "react";

const postFooterIcons = [
    {
        name: "Like",
        imageUrl:
            require('../../assets/logo/heart-outline.png'),
        likedImageUrl: "https://icons8.com/icon/19413/love",
    },
    {
        name: "Comment",
        imageUrl:
            require('../../assets/logo/comment.png'),
    },
    {
        name: "Share",
        imageUrl:
            require('../../assets/logo/share.png'),
    },
    {
        name: "Save",
        imageUrl:
            require('../../assets/logo/save.png'),
    },
];
const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 16, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
};

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 6,
        }}
    >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
                style={styles.story}
                source={ post.profile_picture }
            />
            <View style={{ marginLeft: 6 }}>
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                    {post.user}
                </Text>
                <Text style={{ color: "#fff" }}>{post.address}</Text>
            </View>
        </View>
        <Text style={{ color: "#fff", fontWeight: "900" }}>...</Text>
    </View>
);

const PostImage = ({ post }) => (
    <View style={{ width: "100%", height: 449 }}>
        <Image
            source={{ uri: post.imageURL }}
            style={{ resizeMode: "cover", height: "100%" }}
        />
    </View>
);

const PostFooter = () => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <View style={styles.leftFooterIconsContainer}>
            <Icon
                imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[0].imageUrl}
            />
            <Icon
                imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[1].imageUrl}
            />
            <Icon
                imgStyle={[styles.footerIcon, styles.shareIcon]}
                imgUrl={postFooterIcons[2].imageUrl}
            />
        </View>
        <View>
            <Icon
                imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[3].imageUrl}
            />
        </View>
    </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl } />
    </TouchableOpacity>
);

const Likes = ({ post }) => (
    <View style={{ marginTop: 4 }}>
        <Text style={{ color: "#fff", fontWeight: '600' }}>
            {post.likes.toLocaleString("en")} Likes
        </Text>
    </View>
);

const Caption = ({ post }) => (
    <View style={{ marginTop: 4 }}>
        <Text style={{ color: "#fff" }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
);

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 4 }}>
        {!!post.comments.length && (
            <Text style={{ color: "gray" }}>
                View{post.comments.length > 1 ? " all" : ""}{" "}
                {post.comments.length}{" "}
                {post.comments.length > 1 ? "comments" : "comment"}
            </Text>
        )}
    </View>
);

const Comments = ({ post }) => (
    <>
        {post.comments.map((comments, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 4}}>
                <Text style={{ color: "#fff" }}>
                    <Text style={{ fontWeight: '600' }}>{comments.user}</Text>{" "}
                    {comments.comment}
                </Text>
            </View>
        ))}
    </>
);

const styles = StyleSheet.create({
    story: {
        width: 36,
        height: 36,
        borderRadius: 99,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8601",
    },
    textPOST: {
        width: 36,
        height: 36,
        backgroundColor: "red",
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
    leftFooterIconsContainer: {
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
    },
    
});
export default Post;
